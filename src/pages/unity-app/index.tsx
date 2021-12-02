import { FC } from 'react'
import Unity, { UnityContext } from 'react-unity-webgl'

const unityContext = new UnityContext({
  loaderUrl: 'Build/DRONE-HTML.loader.js',
  dataUrl: 'Build/DRONE-HTML.data',
  frameworkUrl: 'Build/DRONE-HTML.framework.js',
  codeUrl: 'Build/DRONE-HTML.wasm',
})

export const UnityApp: FC = () => {
  return (
    <Unity
      style={{
        width: '100%',
        height: '100%',
      }}
      unityContext={unityContext}
    />
  )
}
