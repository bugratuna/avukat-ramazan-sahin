/**
 * `window.load` ve `<img>.complete` video etiketlerini beklemez — bir
 * `<video>` DOM'a girmiş olsa bile veri arabelleğe alınana kadar hazır
 * sayılmaz. Bu yüzden hem PageLoader hem RouteTransitionLoader, mevcut
 * görsellerin yanında sayfadaki videoların da en azından ilk kareyi
 * gösterecek kadar (readyState >= HAVE_CURRENT_DATA) yüklenmesini bekler.
 */

const waitForImages = (maxWaitMs: number): Promise<void> => {
  const pending = Array.from(document.querySelectorAll('img')).filter((img) => !img.complete)
  if (pending.length === 0) return Promise.resolve()

  return Promise.race([
    Promise.all(
      pending.map(
        (img) =>
          new Promise<void>((resolve) => {
            img.addEventListener('load', () => resolve(), { once: true })
            img.addEventListener('error', () => resolve(), { once: true })
          }),
      ),
    ).then(() => undefined),
    new Promise<void>((resolve) => window.setTimeout(resolve, maxWaitMs)),
  ])
}

const waitForVideos = (maxWaitMs: number): Promise<void> => {
  const HAVE_CURRENT_DATA = 2
  const pending = Array.from(document.querySelectorAll('video')).filter(
    (video) => video.readyState < HAVE_CURRENT_DATA,
  )
  if (pending.length === 0) return Promise.resolve()

  return Promise.race([
    Promise.all(
      pending.map(
        (video) =>
          new Promise<void>((resolve) => {
            video.addEventListener('loadeddata', () => resolve(), { once: true })
            video.addEventListener('error', () => resolve(), { once: true })
          }),
      ),
    ).then(() => undefined),
    new Promise<void>((resolve) => window.setTimeout(resolve, maxWaitMs)),
  ])
}

export const waitForMediaReady = async (maxWaitMs: number): Promise<void> => {
  const start = Date.now()
  await waitForImages(maxWaitMs)
  const remaining = Math.max(0, maxWaitMs - (Date.now() - start))
  await waitForVideos(remaining)
}
