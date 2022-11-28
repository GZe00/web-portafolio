import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Button, Col, Row } from "antd";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main >
      <Row justify="space-between" align="middle">
        <Col>
          <div className="bg-yellow-300">
            Hola a todos
          </div>

        </Col>
        <Col>
          <div className="text-xl underline bg-red-500 rounded-xl px-4">
            Hola mundo
          </div>

        </Col>
        <Col>
          <Button>
            Hola
          </Button>

        </Col>
      </Row>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>dev Moisés Fuentes</title>
