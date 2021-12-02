import { FC } from 'react'
import Unity, { UnityContext } from 'react-unity-webgl'

const unityContext = new UnityContext({
  loaderUrl: 'unity/DRONE-HTML.loader.js',
  dataUrl: 'unity/DRONE-HTML.data',
  frameworkUrl: 'unity/DRONE-HTML.framework.js',
  codeUrl: 'unity/DRONE-HTML.wasm',
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
