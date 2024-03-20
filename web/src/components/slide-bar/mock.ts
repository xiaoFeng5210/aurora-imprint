export const mockData = [
  {
    key: '1',
    title: '测试测试测试测试测试测试测试测试测试测试测试测试'
  },
  {
    key: '2',
    title: '测试22333333'
  },
  // 再给我来好多条类似上面的数据测试
  {
    key: '3',
    title: '测试22333333'
  },
  {
    key: '4',
    title: '测试22333333'
  },
  {
    key: '5',
    title: '测试22333333'
  },
  {
    key: '6',
    title: '测试22333333'
  },
]

function testMock() {
  mockData.forEach((item: any) => {
    item.markdown = `${item.key} ${item.title} markdown content`
  })
}

testMock()
