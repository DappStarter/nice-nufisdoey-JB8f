require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food trap rebel place hold hunt cloth equal gift'; 
let testAccounts = [
"0xa3fefabbeb5121df5274a492b7c6a045c610fd88a3f4a83e6e1b0282d984e8c3",
"0x31b0100a9c8e580fcd640ac848ebf60bee0bcc170e18f21f635b1e92d950469d",
"0x1d412391516e4b7943380a7cd99db8e45d55421e720865b03de20541f610fa69",
"0x9ae9734a98f8d561147286765e3f4af87d1936ca786dbec2902a388dec41ce28",
"0x2cceadb769df1c7d949585764521ad43a004d4bf9142e694d9e8d67a0dfcb52a",
"0x874b2ca53ae2877ffdaef0c3579aceaf540b73805a5c963e90412bdf44ecc513",
"0xdc74eec4d438396c8b984f5b07c7c1b961cf098f4c2db1fb9aa82a9943de992e",
"0xf17ce6bc374ed45b77aafcfe056ef71b6d48b95dfe2f44e721fc3f2e1d57cce5",
"0xe29ae0656e115fa29828d02ae42fc4956898b2ea57e8e6b0d60cb3268baedfd5",
"0x968851e5067c8d05febcf55354c899027a4d2739280b85be9239bbe07ab5df2d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

