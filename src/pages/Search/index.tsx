import { useState } from 'react';
import { Avatar, Col, Layout, Menu, Row, Input } from "antd";
import { useSearchParams } from 'react-router-dom'
import { createFromIconfontCN } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import { WEB_HOST } from "../../constant";
import type { MenuProps } from 'antd';

const { Search } = Input;
const { Header } = Layout;


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2316101_26mu1eoa684h.js',
});

/**
 * 万能搜索页
 */
export default () => {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')

  const [current, setCurrent] = useState('bing');
  const [searchText, setSearchText] = useState(q);

  const toNav = () => {
    window.location.href = WEB_HOST;
  }



  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const items: MenuProps['items'] = [
    {
      label: '必应',
      key: 'bing',
      icon: <IconFont type="icon-bing" />,
    },
    {
      label: '搜狗',
      key: 'sogou',
      icon: <IconFont type="icon-sogou" />,
    },
    {
      label: '360',
      key: '360',
      icon: <IconFont type="icon-360logo" />,
    },
    {
      label: '头条',
      key: 'toutiao',
      icon: <IconFont type="icon-bilibili-line" />,
    },
    {
      label: '神马',
      key: 'quark',
      icon: <IconFont type="icon-gitee-fill-round" />,
    }
  ]

  return (
    <div>
      <Layout>
        <Header style={{ zIndex: 10 }}>
          <Row align="middle" justify="center">
            <Col xl={1} lg={2} md={2} sm={3} xs={4}>
              <div onClick={toNav} style={{ cursor: 'pointer' }}><Avatar shape="square" src={logo} /></div>
            </Col>
            <Col xl={7} lg={8} md={10} sm={11} xs={20}>
              <Search enterButton style={{ display: 'block' }} size="large" defaultValue={searchText!}
                onSearch={(value) => setSearchText(value)} />
            </Col>
            <Col xl={6} lg={4}>
            </Col>
            <Col xl={10} lg={10} md={12} sm={10} xs={24}>
              <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </Col>
          </Row>
        </Header>
        {
          current === "baidu" &&
          <iframe src={`https://www.baidu.com/s?wd=${searchText}`}
            style={{ border: 'none', width: '100%', height: '100vh', position: 'fixed', top: 8, zIndex: 1 }}
          />
        }
        {
          current === "bing" &&
          <iframe src={`https://cn.bing.com/search?q=${searchText}`}
            style={{ border: 'none', width: '100%', height: '100vh', position: 'fixed', top: -30, zIndex: 1 }}
          />
        }
        {
          current === "360" &&
          <iframe src={`https://www.so.com/s?q=${searchText}`}
            style={{ border: 'none', width: '100%', height: '100vh', position: 'fixed', top: 5, zIndex: 1 }}
          />
        }
        {
          current === "sogou" &&
          <iframe src={`https://www.sogou.com/web?query=${searchText}`}
            style={{ border: 'none', width: '100%', height: '100vh', position: 'fixed', top: 8, zIndex: 1 }}
          />
        }
        {
          current === "toutiao" &&
          <iframe src={`https://so.toutiao.com/search?dvpf=pc&source=input&keyword=${searchText}&page_num=0&pd=synthesis`}
            style={{ border: 'none', width: '100%', height: '100vh', position: 'fixed', top: 5, zIndex: 1 }}
          />
        }
        {
          current === "quark" &&
          <iframe src={`https://quark.sm.cn/s?q=${searchText}&safe=1`}
            style={{ border: 'none', width: '100%', height: '100vh', position: 'fixed', top: 8, zIndex: 1 }}
          />
        }
      </Layout>
    </div>
  )
}
