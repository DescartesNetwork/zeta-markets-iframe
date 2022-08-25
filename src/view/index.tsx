import { useSetBackground } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'
import { useEffect } from 'react'

const {
  manifest: { appId },
  sol: { node },
} = configs

const View = () => {
  const setBackground = useSetBackground()

  useEffect(() => {
    setBackground({ light: '#141626', dark: '#141626' })
  }, [setBackground])

  return (
    <EmbededView
      appId={appId}
      src={node}
      title="The world's first options and futures DEX."
      wallet={window.sentre.wallet}
    />
  )
}

export default View
