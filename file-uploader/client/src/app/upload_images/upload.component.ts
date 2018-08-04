import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';
import { FormControl, FormGroup, FormControlName, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-file-uploader',
    templateUrl: 'upload.component.html',
    providers: [
        UploadService
    ]
})
export class UploadComponent implements OnInit {
    private allowedTypes = [
        'image/bmp', 'image/gif',
        'image/jpeg', 'image/png',
    ];
    public uploadForm: FormGroup;
    public files: Array<File> = [];
    public images = [];
    public readonly = [
        null, null, null, null, null, null,
        null, null, null, null, null, null
    ];
    public title: AbstractControl;
    public alt: AbstractControl;
    public error : string = null;

    constructor(
        private uploadService: UploadService
    ) { }


    clicked() {
        const formData: any = new FormData();
        formData.append('title', this.title.value);
        formData.append('alt', this.alt.value);

        for (let i = 0; i < this.files.length; i++) {
            formData.append('uploads[]', this.files[i], this.files[i].name)
        }

        this.uploadService.sendForm(formData)
            .subscribe(
                (data) => {
                    console.log(data);
                },
                (err) => {
                    console.log(err);
                }
            )
    }

    async onFilesSelected(e) {
        if (e.target.files && e.target.files.length > 0) {

            for (let file of e.target.files) {
                let result;

                try {
                    result = await this.parseFile(file);
                    this.error = null;
                    if (this.images.length < 12) {
                        this.images.push(result);
                        this.files.push(file);
                    }
                }
                catch(err){
                    this.error = 'Allowed extensions - jpeg, jpg, bmp, png, gif';
                }
            }
        }
    }

    parseFile(file) {
        let reader = new FileReader();
        let allowedTypes = this.allowedTypes;

        return new Promise((resolve, reject) => {
            file.onerror = () => {
                file.abort();
                reject(new DOMException('Problem parsing input file.'))
            }

            reader.onload = function (e) {
                if(allowedTypes.includes(file.type)) {
                    console.log('hreaklsfasf');
                } else {
                    reject(new DOMException('Problem parsing input file.'))
                }
                resolve(reader.result);
            }

            reader.readAsDataURL(file);
        });
    }

    buildForm() {
        this.uploadForm = new FormGroup({
            title: new FormControl(''),
            alt: new FormControl('')
        });

        this.title = this.uploadForm.get('title');
        this.alt = this.uploadForm.get('alt');
    }

    ngOnInit() {
        this.buildForm();
        console.log(this.images[0]);
    }
}