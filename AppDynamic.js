class AppDynamic extends React.Component {
  constructor() {
    super();
    this.state = {data: [
      {id: 1, name: 'Aaa Aaa'},
      {id: 2, name: 'Bbb Bbb'},
      {id: 3, name: 'Ccc Ccc'}
    ]}
  }

  render() {
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return <table>
      <tbody>{rows}</tbody>
    </table>
  }
}

const PersonRow = (props) => (
  <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
)

export default AppDynamic
