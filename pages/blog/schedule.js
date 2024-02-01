import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
import ConvertBody from 'components/convert-body'
import Image from 'next/image'

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figuer>
          <Image
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width: 1125px) 1125px, 100vw'
            priority
          />
        </figuer>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar> </TwoColumnSidebar>
        </TwoColumn>
      </article>
      <h1>{title}</h1>
    </Container>
  )
}
export default Schedule

const getStaticProps = async () => {
  const slug = 'schedule'
  const post = await getPostBySlug(slug)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}
export { getStaticProps }
