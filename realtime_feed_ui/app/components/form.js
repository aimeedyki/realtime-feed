import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormContainer = styled.div`
  border: 3px solid #862600;
  background-color: #040405;
  padding: 10px 40px;
  width: 500px;
  border-radius: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 2px solid #AD4015;
  background-color: white;
  padding: 4px;
  border-radius: 5px;
`;

const Area = styled.textarea`
  border: 2px solid #AD4015;
  background-color: white;
  padding: 4px;
  border-radius: 5px;
`;

const Label = styled.label`
  color: white;
`;

const Button = styled.button`
  background-color: #AD4015;
  color: white;
  border: 3px solid white;
  border-radius: 8px;
  padding: 5px 10px;
`;

export class Form extends React.Component {
  state = {
    title: '',
    description: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = () => {
    // doing this will make the component faster
    // since it doesn't have to re-render on each state update
    this.props.onChange({
      title: this.state.title,
      description: this.state.description,
    });

    this.props.onSave();

    this.setState({
      title: '',
      description: '',
    });
  }

  render() {
    return (
      <FormContainer>
        <form style={{ margin: '15px 0' }}>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter title"
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Area
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
              name="description"
              value={this.state.description}
            />
          </FormGroup>
          <Button
            type="button"
            className="btn btn-primary"
            onClick={this.handleSubmit}
            disabled={this.props.saving || !this.state.title || !this.state.description}
          >
            {this.props.saving ? 'Saving...' : 'Save'}
          </Button>
        </form>
      </FormContainer>
    );
  }
}
