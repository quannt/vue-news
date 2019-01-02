import Item from '~/components/home/Item'
import CommonImage from '~/components/common/CommonImage'

import { shallowMount } from '@vue/test-utils'

const article = {
  source: { id: null, name: 'Gizmochina.com' },
  author: null,
  title:
    'Sony Xperia XZ4 AnTuTu score puts it ahead of every phone - gizmochina',
  description:
    'The Xperia XZ4 is Sony‘s upcoming flagship phone for this year and it is expected to pack a punch with the Snapdragon 855 processor under its hood. If you want...',
  url:
    'https://www.gizmochina.com/2019/01/02/sony-xperia-xz4-antutu-score-puts-it-ahead-of-every-phone/',
  urlToImage:
    'https://www.gizmochina.com/wp-content/uploads/2018/11/Sony-Xperia-XZ4-renders-2.jpg',
  publishedAt: '2019-01-02T10:33:00Z',
  content:
    'The Xperia XZ4 is Sony ‘s upcoming flagship phone for this year and it is expected to pack a punch with the Snapdragon 855 processor under its hood. If you want to know just how powerful the processor is inside the phone, then you should check out its AnTuTu … [+1105 chars]'
}

describe('Item.vue', () => {
  test('renders article title', () => {
    const wrapper = shallowMount(Item, {
      propsData: { article }
    })

    expect(wrapper.text()).toContain(article.title)
  })

  test('renders article source name', () => {
    const wrapper = shallowMount(Item, {
      propsData: { article }
    })

    expect(wrapper.text()).toContain(article.source.name)
  })

  test('renders article image', () => {
    const wrapper = shallowMount(Item, {
      propsData: { article }
    })

    const commonImage = wrapper.find(CommonImage)
    expect(commonImage.is(CommonImage)).toBe(true)
  })
})
