import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders header', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Header, {
      stubs:['router-link']
    })
    expect(wrapper.text()).toMatchSnapshot(msg)
  })
})
