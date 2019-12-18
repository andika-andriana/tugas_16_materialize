import React from "react";
import {
  Row,
  Col,
  Slider,
  Caption,
  Slide,
  Card,
  CardTitle,
  MediaBox
} from "react-materialize";

function App() {
  return (
    <div>
      <Row style={{ marginTop: 10 }}>
        <MediaBox
          options={{
            inDuration: 275,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200
          }}
        >
          <Slider
            fullscreen={false}
            options={{
              duration: 500,
              height: 300,
              indicators: true,
              interval: 6000,
              marginTop: "20px"
            }}
          >
            <Slide
              image={
                <img
                  alt="Pantai"
                  src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"
                />
              }
            >
              <Caption placement="center">
                <h3>Pantai</h3>
                <h5 className="light grey-text text-lighten-3">
                  Dapatkan Kesempatan Jalan - Jalan Dengan Membeli Sebuah Produk
                </h5>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  alt="Paris"
                  src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"
                />
              }
            >
              <Caption placement="left">
                <h3>Hotel Mewah</h3>
                <h5 className="light grey-text text-lighten-3">
                  Dapatkan Kesempatan Menginap Di Hotel Mewah Dengan Membeli
                  Sebuah Produk
                </h5>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  alt="Paris"
                  src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"
                />
              }
            >
              <Caption placement="right">
                <h3>Paris</h3>
                <h5 className="light grey-text text-lighten-3">
                  Dapatkan Kesempatan Ke Paris Dengan Membeli Sebuah Produk
                </h5>
              </Caption>
            </Slide>
          </Slider>
        </MediaBox>
      </Row>
      <Row style={{ marginBottom: 0 }}>
        <b>Hot List</b>
      </Row>
      <Row>
        <Col className="black-text" s={3}>
          <Card
            style={{ height: 230 }}
            className="card small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
                Audio
              </CardTitle>
            }
          >
            <p style={{ fontSize: 13 }}>
              Audio Technica - Mulai Dari
              <mark className="red darken-1">Rp 910rb</mark>
            </p>
          </Card>
        </Col>
        <Col className="black-text" s={3}>
          <Card
            style={{ height: 230 }}
            className="card small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
                Handphone
              </CardTitle>
            }
          >
            <p style={{ fontSize: 13 }}>
              Handphone Samsung - Mulai Dari
              <mark className="red darken-1"> Rp 200rb</mark>
            </p>
          </Card>
        </Col>
        <Col className="black-text" s={3}>
          <Card
            style={{ height: 230 }}
            className="card small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
                Sequishy
              </CardTitle>
            }
          >
            <p style={{ fontSize: 13 }}>
              Sequishy - Mulai Dari
              <mark className="red darken-1"> Rp 5,5rb</mark>
            </p>
          </Card>
        </Col>
        <Col className="black-text" s={3}>
          <Card
            style={{ height: 230 }}
            className="card small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
                Koleksi The Avenger
              </CardTitle>
            }
          >
            <p style={{ fontSize: 13 }}>
              Koleksi The Avenger - Mulai Dari
              <mark className="red darken-1"> Rp 5,5rb</mark>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
