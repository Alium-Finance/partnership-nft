const ChainId: any = process.env.REACT_APP_CHAIN_ID

const whitelist = {
  '97': [
    '0xAa50dA3BD10D140536Dd96136a4781274c09561b',
    '0x5C9C39Dfe868bE7Ee04EdB425957Be479c3dC356',
    '0x51ddE69E667080D38D290E0F13c77877EA4DB302',
    '0x1743b2Cec838BD143d58CE910c6Bd22E45869F47',
    '0xCA6a2D72869F69B0086105b2e8242463D4fe70Af',
    '0x729af23D728ebD9c789Bd405a3D2CCd2d7315CB4',
    '0x89FCA750687B2461d810d5EfC35c43A1cD4b4AF6',
    '0xFF558Fb7DE835bFAf47b55402F1275aBCe2D8256',
    '0x8f0750aEA162B89Ab39842043FAca14666DFA172',
    '0x749A11F59bB5821e9Bd9386a2d28a1E9d4AeD185',
    '0xfCaADfA95aD6706b528a5785a03fDb5C4e2A34Af',
    '0x313F95cD0221A09A20590B7Fc135fD35b515483E',
    '0x847359Ac954b2243DAAD29AbC3F2974e00bD7a26',

    '0x64eA04c926e1a766BAf63B88c6FADbAA39957717',
    '0x194a39f48f1d5e310d0e0cc25E727c7d2Bff0b14'
  ],
  '56': [
    '0xAa50dA3BD10D140536Dd96136a4781274c09561b',
    '0x5C9C39Dfe868bE7Ee04EdB425957Be479c3dC356',
    '0x51ddE69E667080D38D290E0F13c77877EA4DB302',
    '0x1743b2Cec838BD143d58CE910c6Bd22E45869F47',
    '0xCA6a2D72869F69B0086105b2e8242463D4fe70Af',
    '0x313F95cD0221A09A20590B7Fc135fD35b515483E',
    '0xd281cf7A8194c59790a17FA5247B7B46b95CE1B0',
    '0x014E777b1ca75D2Db682B7B46bEaf67cB26C2687',
    '0x28aa016FdF29A4d7022C28995EA33B0427f5C137',
    '0x749A11F59bB5821e9Bd9386a2d28a1E9d4AeD185',
    '0xFF558Fb7DE835bFAf47b55402F1275aBCe2D8256',

    '0xd281cf7A8194c59790a17FA5247B7B46b95CE1B0',
    '0x014E777b1ca75D2Db682B7B46bEaf67cB26C2687',
    '0x019396733803367169843fa723e34562246A022d',

    '0x29bf6652e795c360f7605be0fcd8b8e4f29a52d4',
    '0xf411061ea8f6435be73eDc5359A179a308c73a0E',
    '0x90CE8933eF4A59128a7d2F55c5Ac9162E19D2829',
    '0x5F6a4215FE729870A437f29d3b3278e27C8789B0',
    '0xab9A3C47D51795f1bA740C35BA8d046262c9fE21',
    '0x450Ea18B4F032F2c2115558859c69468dBa3Ad18',
    '0xa1cc1D2De52706AE895DbA1852689D8d03708F3B',
    '0x189bdB1Adc1DA77DC2e1987126130C858C41E1aC',
    '0xf37104e76D7aDabaA13138FE331995049aC0F3A0',
    '0xe864A1c32357dF67Cb7C9bEe8EC76C8904366666',
    '0x3B2d39e2f3F6fa52Bf16dCd3d4B0bB037677dE98',
    '0x8dB3F276F1f795CD001091E988EE6e8eA3cF03c1',
    '0xdb01F2e7d8F0d84771c187C85569363EDb704668',

    '0x64eA04c926e1a766BAf63B88c6FADbAA39957717',
    '0x194a39f48f1d5e310d0e0cc25E727c7d2Bff0b14'
  ]
}

export default whitelist[ChainId]
