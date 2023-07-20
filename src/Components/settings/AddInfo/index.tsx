import { Button, Row } from 'antd'
import "./index.css"

export default function Index(props: any) {
  const { title, addInfo, OpenDrawer } = props

  // const [OpenDrawer, setOpenDrawer] = useState(false)

  //handleAddInfoClick
  const handleAddInfoClick = () => {
    OpenDrawer(true)
  }

  // const onClose = () => {
  //   setOpenDrawer(false)
  // }


  // function onFinishFailed(errorInfo: any): void {
  //   console.log("🚀 ~ file: index.tsx:23 ~ onFinishFailed ~ errorInfo:", errorInfo)

  // }

  // function onFinish(values: any): void {
  //   console.log("🚀 ~ file: index.tsx:27 ~ onFinish ~ values:", values)

  // }

  return (
    <>
      <Row style={{ width: '100%' }} justify="space-between">
        <div>
          <b style={{ fontSize: '30px' }}>{title.charAt(0).toUpperCase() + title.slice(1)}</b>
        </div>
        <div>
          {addInfo && <Button

            type="primary"
            block={true}
            size='large'
            onClick={handleAddInfoClick}
            style={{ backgroundColor: '#0B78C2' }}
          >
            + Add {title}
          </Button>
          }
        </div>

      </Row>
      <div className="usertable" style={{ margin: "1%" }}>
      </div>
    </>


  )
}
