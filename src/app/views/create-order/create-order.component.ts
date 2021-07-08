import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Order } from '../../models/Order';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit, AfterViewInit {

  displayedColumns = ['cpf', 'name', 'dob', 'email', 'cell'];
  orderFromForm: Order = new Order();
  orderList: Order[] = [];
  orderTable: MatTableDataSource<Order> = new MatTableDataSource<Order>(this.orderList);
  form: FormGroup;

  constructor(private router: Router, 
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.createForm();

    this.orderList.push(
      { 
        cpf: "12345678910",
        name: "João da Silva",
        dob: new Date(1995,1,1),
        email: "joao@email.com",
        cell: "41 9876543221",
        createdAt: new Date(),
      },
    
      {
         cpf: "12345678910",
        name: "Maria de Souza",
        dob: new Date(1997,3,1),
        email: "maria@email.com",
        cell: "41 9876543222",
        createdAt: new Date(1995,1,1),
      }

      
    )

    this.orderTable._updateChangeSubscription();


  }

  ngAfterViewInit(){
    
  }

  createForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      dob: [null, Validators.required],
      cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email:[null, [Validators.required, Validators.email]],
      cell:[null, Validators.required]
    })
  }

  create(){
    this.orderFromForm = this.form.value;

    this.orderList.push(this.orderFromForm);

    this.orderTable._updateChangeSubscription();
    
  }

}
