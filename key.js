import * as ed from '@noble/ed25519';
import { randomBytes, createHash } from 'crypto'; // Use Node.js crypto module

// Custom sha512 implementation using Node.js crypto module
const sha512Async = async (message) => {
  return createHash('sha512').update(message).digest();
};

// Assign the custom SHA512 implementation to noble's etc.sha512Async
ed.etc.sha512Async = sha512Async;

(async () => {
  const privateKey = randomBytes(32); // Generate 32-byte Uint8Array for the private key
  const publicKey = await ed.getPublicKeyAsync(privateKey);

  console.log(`Private key: 0x${Buffer.from(privateKey).toString('hex')}`);
  console.log(`Public key: 0x${Buffer.from(publicKey).toString('hex')}`);
})();
