require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift release saddle evil hope arctic army gaze'; 
let testAccounts = [
"0x9c3c131ca156fe4b72452988e3a61b11063eadbcfd7b51c59fc42d8af6a08165",
"0xe0950c19a10130eb8eb437b4b7cde374514dc86337f9a6fdf869ef0c9797c2bc",
"0x357bc90dd8eb63f1065535a63a75c8bd1f486ba94ec90771faea0a5add4d5490",
"0x3e0ba6ab7b880a5d958176e5e792ddc8c495ec01fca4e6d6a3dacd8339904d8b",
"0xe1a3347866c772e121e58a20b00c6a5e32fe04164db253b719fcfc9d6f00c133",
"0x5e1444f5cc0f78d497c9a41c41baef6cb8c3101832a91905320ac535b98212cd",
"0x0c460026e7d6c42d5a0b24465c1437cf391973ac8de7c26d8bb8d008f2a77b34",
"0x3f6e0bdf2402b8274a4396ec005ae93b78b28153ceec35a86319f4d35c0dcc79",
"0x9038aeb862843c7e21b2c8c65c19c4d93cb182918479a610fb1fd83a71acfcec",
"0x9561b88f10c8b59a037890b820d019da061a35b29120556625c0d8db87dfbd24"
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

