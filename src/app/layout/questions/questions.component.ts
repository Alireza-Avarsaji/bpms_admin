import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionComponent } from 'src/shared/components/create-question/create-question.component';
import { configHeaderModel } from 'src/shared/components/table-header/table-header.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

    //? Config Table Header
    configTableHeader: configHeaderModel = {
      addBtn: true,
      searchBtn: true,
      excelBtn: false,
      title: 'سوالات'
    };

    displayedColumns: string[] = ['نام', 'عنوان'];
  

  questions = [
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    },
    {
      name: 'sasf',
      title: 'fhti'
    }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  createQuestion() {
    const ref = this.dialog.open(CreateQuestionComponent, {
      
    }) 
  }

  search(page?: number) {

  }



}
