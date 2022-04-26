import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contact: ContactService
  ) { }

  onSubmit(FormData) {
    this.contact.PostMessage(FormData).subscribe(response => {
      location.href ='https://mailthis.to/confirm'
    }, error => {
      console.warn(error.responseText);
      console.log({error})
    })
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Nom: new FormControl('', [Validators.required]),
      Prenom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Motif: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required])
    })
  }

}
