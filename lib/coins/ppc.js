var common = {
  name: 'Peercoin',
  unit: 'PPC'
}

var main = Object.assign({}, {
  hashGenesisBlock: '0000000032fe677166d54963b62a4677d8957e87c508eaa4fd7eb1c880cd27e3',
  versions: {
    //nothing defined, used this at will.
    "bip32": {
      "public": 0x0488b21e,
      "private": 0x0488ade4
    },
    bip44: 6,
    private: 0xc4,
    public: 0x44,
    scripthash: 0x05
  }
}, common)

module.exports = {
  main: main,
  test: null
}
