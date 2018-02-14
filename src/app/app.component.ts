import { Component } from '@angular/core';
import {AppService} from './app.service';
import * as $ from 'jquery';

//Customized json structure
 let jsonStructure:any=[{
  question:"Lorem Ipsum is simply the dummy text of the printing and typesetting industry."+
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
  title:'What is Lorem Ipsum...',
  answers:[{
  value:'Yes',
  score:1
  },
  {value:'No',score:0}]
  },
  {
  question:"Contrary to popular belief,Lorem Ipsum is not simply random text.It has roots in a place "+
  "of classic Latin literature from 45BC, making it over 2000 years old.",
  title:"Where does it come from?",
  answers:[{
  value:'Whatever!',
  score:1
  },
  {value:'Ohk!!',score:2},{value:'Hmmm...Maybe',score:3},{value:'Yeah!!!',score:4}]
  },
  {
    question:"It was popularised in the 1960s with the release of Letraset Sheets containing Lorem Ipsum passages,"+
    "and more recently with desktop publishing software like Aldus PageMaker inclding vesions of Lorem Ipsum.",
    title:"How did it get popular?",
    answers:[{
    value:'Whatever!',
    score:1
    },
    {value:'Ohk!!',score:2},{value:'That is interesting!',score:3},{value:'Amazing!!',score:4}]
    },
    {
      question:"All the LoremIpsum generators on the Internet tend to repeat predefined chunks as necessary,"+
      "making this the first true generatoron the Internet. It uses a dictionary of over 200 Latin words,"+
      "combined with a handfulof model sentence structures, to generate Lorem Ipsum which looks reasonable.",
      title:"Where can I get some?",
      answers:[{
      value:'Do I need this!',
      score:1
      },
      {value:'ohk!',score:2},{value:"That's helpful!",score:3},{value:'Great Info!!',score:4}]
      }]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myJson=jsonStructure;
// myJson;
  index=0;
  scoreArray=[];
  surveyScore:number =0;
 endOfQuestionnaire:boolean = false;
total:number =this.myJson.length;
showBackButton:boolean=false;
//total:number;

constructor(){}

/*startTheSurvey(event){
  $('#surveySection').removeClass('hiddenCls');
  $('#startSurvey').addClass('hiddenCls');
  this.appService.getQuestionnaire()
  .subscribe(
     myJson => this.myJson = myJson
     )
     this.router.navigate(['/assessment']);
}*/

//Method called on click of any of the choices for the questions
  nextQuestion(event){
  this.index++;
  this.showBackButton=true;
  if($('.backBtnCls:hidden')){
    $('.backBtnCls').show();
  }
  $("#surveySection").removeClass('surveySectionCls');
  this.scoreArray.push(event.target.value);
  
  if(this.index == this.myJson.length){
this.endOfQuestionnaire= true;
  }

  this.surveyScore=0;
 for(var i=0;i<this.scoreArray.length;i++){
   this.surveyScore+= parseInt(this.scoreArray[i]);
 }
}
 
//Method called when the back button is clicked
  prevQuestion(event){
    this.index--;
    this.endOfQuestionnaire= false;
    for(var i=0;i<this.scoreArray.length;i++){
      if(i==this.index){
        this.scoreArray.splice(i,1);
      }
    }
    if(this.index == 0){
      $('.backBtnCls').hide();
      $("#surveySection").addClass('surveySectionCls');
    }
  }
}
