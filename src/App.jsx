import React, { Component } from "react";
import { Button, Select, Radio, Slider, Alert, Progress, Card, Breadcrumb } from "antd";
import { PaletaColores } from "./paletaColores";
import "./App.css";

const dummyMsj = "Te entregamos la mejor información para tomar decisiones ¡Cierra el trato y disfruta de tu nuevo hogar!";
class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="title">Test de componentes Ant Design</h1>
					<p>Ver toda la documentación de <a href="https://ant.design/components/overview/">componentes</a>.</p>
				</header>

				<Card title="Colores">
					<PaletaColores />
				</Card>

				<section className="c-cards">
					<Card title="Buttons">
						<div className="c-items">
							<Button type="primary">Primary</Button>
							<Button type="warning">Warning</Button>
							<Button type="danger" >Danger</Button>
							<Button>Default</Button>
							<Button type="dashed">Dashed</Button>
							<Button type="text">Text</Button>
							<Button type="link">Link </Button>
						</div>
						<br />
						<div className="c-items">
							<Button type="primary" size="small">Small</Button>
							<Button type="primary" >Middle (default)</Button>
							<Button type="primary" size="large">Large</Button>
						</div>



					</Card>
					<Card title="Breadcrumbs">
						<Breadcrumb separator=">">
							<Breadcrumb.Item>Inicio</Breadcrumb.Item>
							<Breadcrumb.Item>
								<a href="">Venta</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
								<a href="">Casa</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>Metropolitana</Breadcrumb.Item>
						</Breadcrumb>
					</Card>


					<Card title="Select">
						<Select
							defaultValue="Seleccione comuna"
							onChange={value => console.log(value)}
						>
							<Option value="peñalolén">Peñalolén</Option>
							<Option value="la-florida">La Florida</Option>
							<Option value="disabled" disabled>Pedro Aguirre Cerda</Option>
							<Option value="vina">Viña del Mar</Option>
						</Select>
					</Card>

					<Card title="Radio group">
						<Radio.Group defaultValue="a" buttonStyle="solid">
							<Radio.Button value="a">Nuevo</Radio.Button>
							<Radio.Button value="b" disabled>Usado</Radio.Button>
							<Radio.Button value="c">Arriendo</Radio.Button>
							<Radio.Button value="d">Venta</Radio.Button>
						</Radio.Group>
					</Card>

					<Card title="Slider">
						<Slider defaultValue={30} />
					</Card>

					<Card title="Progress">
						<Progress percent={30} type="circle" />
					</Card>
					<Card title="Alertas">
						<Alert message={dummyMsj} type="success" />
						<Alert message={dummyMsj} type="warning" />
						<Alert message={dummyMsj} type="error" />
						<Alert message="Este es cerrable" description={dummyMsj} type="info" closable />
					</Card>
				</section>


			</div>
		);
	}
}

export default App;
