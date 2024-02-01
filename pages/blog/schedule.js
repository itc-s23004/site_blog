import { getPostBySlug } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
import PostCategories from 'components/post-categories'
import ConvertBody from 'components/convert-body'
import Image from 'next/image'

const Schedule = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description
}) => {
  return (
    <Container>
      <article>
        <Meta
          pageTitle={title}
          pageDesc={description}
          pageImg={eyecatch.url}
          pageImgW={eyecatch.width}
          pageImgH={eyecatch.height}
        />

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
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
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
  const description = extractText(post.content)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      description
    }
  }
}
export { getStaticProps }
