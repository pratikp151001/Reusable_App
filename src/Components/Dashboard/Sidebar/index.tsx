import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { Image } from 'antd'

export default function index() {
    return (
        <Sider style={{ backgroundColor: '#286FD1' }}>
            <div style={{ height: '64px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <Image preview={false} src={'/assets/images/logos/image_2023_07_20T11_13_47_343Z (1).png'} style={{ display: 'block', width: '100px', height: '40px' }} />
                <Image preview={false} src={'/assets/images/logos/animalPlanetText.png'} style={{ display: 'block', width: '100px', height: '20px' }} />
            </div>
        </Sider>
    )
}
