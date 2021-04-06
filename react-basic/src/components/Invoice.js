import React, { Component, Fragment } from "react";
//import InvoiceHeader from "./InvoiceHeader";
//import InvoiceRow from "./InvoiceRow";
import { Table } from "reactstrap";
import "./Invoice.css";

class Invoice extends Component {
  render() {
    return (
      <Fragment>
        <div className="impresion">
          <div className="seccion seccion1">
            <div className="z-left">
              <h2>Factura Electrónica de Venta</h2>
            </div>
            <div className="z-right">
              <p className="prefijo">
                <span>Prefijo:</span> <span> CT 1066</span>
              </p>
            </div>
          </div>
          <div className="seccion seccion2">
            <div className="z-left logo"></div>
            <div className="z-left observacion">
              <div className="text">Observación régimen Nota de resolución</div>
              <div className="estado">Aprobado</div>
            </div>
            <div className="z-right">
              <Table>
                <tbody>
                  <tr>
                    <th>Fecha emisión:</th>
                    <td>21/09/20</td>
                  </tr>
                  <tr>
                    <th>Hora emisión:</th>
                    <td>08:15:20</td>
                  </tr>
                  <tr>
                    <th>Fecha firmado:</th>
                    <td>21/09/20 - 08:15:20</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="seccion seccion3">
            <div className="z-left datos">
              <h3>Nombre completo del emisor de la factura</h3>
              <p>
                <span className="title">NIT:</span>{" "}
                <span className="valor">6666666</span>
              </p>
              <p>
                <span className="title">Dirección:</span>{" "}
                <span className="valor">CR 43A 30-sur 23</span>
                <span className="title">Municipio:</span>{" "}
                <span className="valor"></span>
                <span className="title">Teléfono:</span>{" "}
                <span className="valor">4480195</span>
              </p>
            </div>
          </div>
          <div className="seccion seccion4">
            <div className="z-left datos">
              <h3>Cliente: Nombre Cliente o receptor de la factura</h3>
              <p>
                <span className="title">NIT:</span>{" "}
                <span className="valor">6666666</span>
              </p>
              <p>
                <span className="title">Dirección:</span>{" "}
                <span className="valor">CR 43A 30-sur 23</span>
                <span className="title">Municipio:</span>{" "}
                <span className="valor"></span>
                <span className="title">Teléfono:</span>{" "}
                <span className="valor">4480195</span>
              </p>
              <p>
                <span className="title">Email:</span>{" "}
                <span className="valor"></span>
              </p>
            </div>
            <div className="z-left formas">
              <p>Forma de pago:</p>
              <p>Días para el pago:</p>
              <p>Medio de pago:</p>
              <p>Fecha de vencimiento: </p>
            </div>
          </div>
          <div className="seccion5">
            <Table>
              <thead>
                <tr>
                  <th>Descripción del Servicio</th>
                  <th>Cantidad</th>
                  <th>Valor Unitario</th>
                  <th>Cuota moderadora</th>
                  <th>Impuesto</th>
                  <th>Valor descuento</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primera cita</td>
                  <td>15</td>
                  <td>$100000</td>
                  <td>$45.000,00</td>
                  <td>0</td>
                  <td>$450.000</td>
                  <td>450000</td>
                </tr>
                <tr>
                  <td>Revisión</td>
                  <td>15</td>
                  <td>$100000</td>
                  <td>$45.000,00</td>
                  <td>0</td>
                  <td>$450.000</td>
                  <td>450000</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="seccion seccion6">
            <div className="z-left observaciones">
              <div>Observacion</div>
              <div className="campo">
                Correspondiente a las citas atendidas del 1 de XXXX al 30 XXXX
                del año XXXX
              </div>
            </div>
            <div className="z-right total">
              <Table>
                <tbody>
                  <tr>
                    <th>Subtotal:</th>
                    <td>$1.250.000</td>
                  </tr>
                  <tr>
                    <th>Descuentos:</th>
                    <td>$555.000</td>
                  </tr>
                  <tr>
                    <th>Total de la operación:</th>
                    <td>$695.000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="seccion7">
            <Table bordered>
              <tbody>
                <tr>
                  <td>
                    <span>Autorización Número:</span> 666666
                  </td>
                  <td>
                    <span>Son:</span> Seiscientos Noventa y Cinco Mil
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Póliza Número:</span> 666666
                  </td>
                  <td>
                    <span>Código CUFE:</span>{" "}
                    1dfdcaae328afaa78711bce57605c07b0f1b606a7b14680fd16f34e43dbfbc66
                    d89c4e08005769364da185dab95295b{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="seccion8">
            <Table bordered>
              <tbody>
                <tr>
                  <td>
                    Leyenda No. 1 (Opcional) Aquí aparecerá el texto de la
                    leyenda.
                  </td>
                </tr>
                <tr>
                  <td>
                    Leyenda No. 2 (Opcional) Aquí aparecerá el texto de la
                    leyenda.
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="seccion9">
            <Table>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <Table bordered>
                      <tbody>
                        <tr>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Invoice;
