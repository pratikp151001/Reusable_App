import { Button, Row } from 'antd'
import "./index.css"
import { Link } from 'react-router-dom'

export default function Index(props: any) {
  const { title, addInfo, OpenDrawer } = props

  const handleAddInfoClick = () => {
    OpenDrawer(true)
  }

  return (
    <>
      <Row style={{ width: '100%' }} justify="space-between">
        <div>
          <b style={{ fontSize: '26px' }}>{title === 'subscription' && <span>My </span>}{title.charAt(0).toUpperCase() + title.slice(1)}
            {title === 'integrations' && (
              <>
                {' '}
                | <Link to={''} className='ViewActiveConnectionLink' style={{ fontSize: '13px' }}>View Active Connections (0)</Link>
              </>
            )}</b>
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
