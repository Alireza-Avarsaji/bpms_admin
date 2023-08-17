import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  createQuestion() {
    this.router.navigate(['/layout/questions/create'])
  }

  search(page?: number) {

  }



}
