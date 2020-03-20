import Nesting from "NestingRoute/Nesting";// 企业事件内容

export const Events = () => (
  <Nesting>
    <section className="events">
      <h1>企业大事件</h1>
    </section>
  </Nesting>

)

// 公司产品
export const Products = () => (
  <Nesting>
    <section className="products">
      <h1>公司产品：主要经营 手机、电脑</h1>
    </section>
  </Nesting>
)

// 联系我们
export const Contact = () => (
  <Nesting>
    <section className="contact">
      <h1>联系我们</h1>
      <p>公司电话：0755 - 12345678</p>
    </section>
  </Nesting>
)
