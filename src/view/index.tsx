import { net, Net, useUI } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'
import { useEffect } from 'react'

const {
  manifest: { appId },
} = configs

const SOURCES: Record<Net, string> = {
  devnet: 'https://devnet.zeta.markets/',
  testnet: '',
  mainnet: 'https://mainnet.zeta.markets/',
}

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ light: '#141626', dark: '#141626' })
  }, [setBackground])

  return (
    <EmbededView
      appId={appId}
      src={SOURCES[net]}
      title="The world's first options and futures DEX."
      wallet={window.sentre.wallet}
    />
  )
}

export default View
