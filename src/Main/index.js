import React, { Component } from 'react';
import styled from 'styled-components';
import isUrl from 'is-url';
import FAQ from './Faq';
import Order from './Order';
import Popup from './PopUp';
import Footer from '../generic/Footer';
import Header from '../generic/Header';
import Button from '../generic/Button';

const Wrapper = styled.div`
  text-align: center;  
`;

const H1 = styled.h1`
  font-size: 38px;
  font-family: 'Roboto', sans-serif;
  color: #000;
  margin-bottom: 0;
`;

const H2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #000;
  // text-shadow: 1px 1px 2px black;
  font-size: 24px;
  margin-top: 10px;
`;

const InputWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 0 20px;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Form = styled.form`
 padding-bottom: 50px;
`;

const Input = styled.input`
  padding: 10px;
  color: #333;
  border: 1px solid gray;
  border-radius: 3px;
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Message = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 10px;
  width: 100%;
  text-align: left;
  color: ${(props) => props.message.status === 'success' ? '#60cc60' : '#e04c4c'};
  display: ${(props) => props.message.text ? 'block' : 'none'};
`;

const AdsDesctop = styled.div`
  padding: 30px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const AdsMobile = styled.div`
  padding-bottom: 15px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      isPopUpOpen: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  componentDidMount() {
    if (window) {
      VK.init({apiId: 6702137, onlyWidgets: true});
      VK.Widgets.Comments("vk_comments", {limit: 5, attach: "*"});
    }
  }

  handleChange(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  async handleSubmit(e) {
    e.preventDefault();

    if(this.state.url && !(/^https?:\/\/.*$/.test(this.state.url))){
      await new Promise((resolve) => {
        this.setState(({url}) => ({
          url: `http://${url}`
        }), resolve)
      });
    }
    if(isUrl(this.state.url)){
      this.setState({message: {
        text: 'Загрузка сайта скоро начнется',
        status: 'success',
      }});
      yaCounter50440108.reachGoal('clone_action');
      this.sendForm();
    } else {
      this.setState({message: {
        text: 'Некорректно введен адрес сайта',
        status: 'error',
      }});
    }
  }

  sendForm() {
    this.setState({loading: true});
    fetch('/api/copy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({url: this.state.url}),
    }).then(async (data) => {
      if (data.status !== 200) {
        const response = await data.json();
        if(response){
          this.setState({message: {
            loading: false,
            text: response.message,
            status: 'error',
          }});
        }
        throw new Error("server response is not OK");
      }
      const blob = await data.blob();
      const newBlob = new Blob([blob], {type: "application/zip"});
      const datax = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = datax;
      link.download=`${this.state.url}.zip`;
      link.click();
      setTimeout(function(){window.URL.revokeObjectURL(datax), 100 });
      this.setState({loading: false});
    }).catch(async (data) => {
      this.setState({loading: false});
      console.log(data);
    });
  }

  openPopUp = () => {
    this.setState({ isPopUpOpen: true });
  };

  closePopUp = () => {
    this.setState({ isPopUpOpen: false });
  };

  render() {
    const { isPopUpOpen } = this.state;
    return <Wrapper>
      <Header/>
      <Form>
        <H1>Скопировать сайт онлайн. Бесплатно</H1>
        <H2>Загрузка архива начнется автоматически</H2>
        <InputWrapper>
          <Input name="url" type="text" placeholder="Введите адрес сайта (http://site.ru)" onChange={this.handleChange} value={this.state.url} />
          <Button
            type="submit"
            onClick={this.handleSubmit}
            isLoading={this.state.loading}
            disabled={this.state.loading && 'disabled'}
          >Скопировать</Button>
        </InputWrapper>
        {this.state.message &&
          <Message message={this.state.message}>
            <span>{this.state.message.text}</span>
          </Message>
        }
      </Form>

      <Popup isPopUpOpen={isPopUpOpen} closePopUp={this.closePopUp} />

      <Order openPopUp={this.openPopUp} />

      <FAQ/>

      <AdsDesctop>
        <a target="_new" href="https://timeweb.com/ru/?i=36726&a=130">
          <img src="https://wm.timeweb.ru/images/posters/600x60/600x60-2-anim.gif" />
        </a>
      </AdsDesctop>

      <AdsMobile>
        <a target="_new" href="https://timeweb.com/ru/?i=36726&a=91">
          <img src="https://wm.timeweb.ru/images/posters/240x200/240x200-1-anim.gif" />
        </a>
      </AdsMobile>

      <div id="vk_comments_block">
        <div id="vk_comments" />
      </div>

      <Footer/>
    </Wrapper>
  }
}
