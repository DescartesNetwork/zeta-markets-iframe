import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
  sol: { node },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={node}
      title="The world's first options and futures DEX."
      wallet={window.sentre.solana}
    />
  )
}

export default View
