import { client } from 'lib/api'

const Schedule = () => {
  const resPromise = client.get({
    endpoint: 'blogs'
  })
  try {
  const res = await resPromise
  console.log(res)
  } catch (err) {
  console.log(err)
    }

  resPromise.then(res => console.log(res)).catch(err => console.log(err))
  return {
    props: {}
  }
}
