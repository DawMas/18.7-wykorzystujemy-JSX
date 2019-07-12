var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function () {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'https://static.thenounproject.com/png/45219-200.png'} />
        <div className={'contactInfo'}>
          <p className={'contactLabel'}>Imię: {this.props.item.firstName}
          </p>
          <p className={'contackLabel'}>Nazwisko: {this.props.item.lastName}
          </p>
          <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
          </a>
        </div>
      </div>
    )
  },
});