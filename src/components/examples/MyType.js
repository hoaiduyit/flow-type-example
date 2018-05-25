// @flow
import React from "react";

type Customer = {
  shard_id: string,
  cus_name: string,
  cus_gender: number,
  cus_phone: number
};

type customers = Array<Customer>;

export default class MyType extends React.Component<customers> {
  customers = [
    {
      shard_id: "hello",
      cus_phone: 9333333,
      cus_name: "Duy",
      cus_gender: 1
    },
    {
      shard_id: "hello1",
      cus_phone: 9333333,
      cus_name: "Duy1",
      cus_gender: 1
    }
  ];

  arrayCus: customers = this.customers;

  render() {
    console.log(this.arrayCus);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.arrayCus.map(item => {
              return (
                <tr key={item.shard_id}>
                  <td>{item.cus_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
