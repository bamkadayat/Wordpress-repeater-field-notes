import React, { Component } from 'react'
import axios from 'axios'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class Faq extends Component {
    state = {
        qa: []        
    }
     componentDidMount(){
        axios.get('https://bamkadayat.com/wp-json/wp/v2/pages/132')
        .then(response =>{
            let data=response.data;
            this.setState({
                qa:data.acf.qa
            });            
        })
    }
    render() {
        let questionAnswer=this.state.qa
        return(
            <div> 
                <h1>Q&A</h1>    
                <Accordion>    
                    {
                        questionAnswer.map((x,i)=>{
                        let question = x.question;
                        let answer =x.answer;
                        return (
                            <AccordionItem key={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <h2>{question}</h2>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div dangerouslySetInnerHTML={{__html: answer}} /> 
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                        })
                    }
                </Accordion> 
            </div>           
        
        )        
}
}
export default Faq
