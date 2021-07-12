import arvish from 'arvish'
import { fetchSpaceInfo, search } from './apis'
import { mapSearchToarvisOutput, getDomain } from './transformers'

(async function () {
  const spaceInfo = await fetchSpaceInfo()
  const domain = getDomain(spaceInfo)

  const searchResponse = await search(arvish.input.normalize())
  const result = mapSearchToarvisOutput(domain, searchResponse)

  arvish.output(result)
})();
