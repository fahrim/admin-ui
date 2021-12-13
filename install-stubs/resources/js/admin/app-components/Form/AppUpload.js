import { BaseUpload } from 'craftable';

Vue.component('media-upload', {
    mixins: [BaseUpload],
    template: `<dropzone :id="collection"
                       :url="url"
                       :language="{
                                dictDefaultMessage : 'Dosyaları yüklemek için buraya bırakın',
                                dictFallbackMessage : 'Tarayıcınız sürükle bırak dosya yüklemelerini desteklemiyor.',
                                dictFallbackText : 'Dosyalarınızı eski günlerdeki gibi yüklemek için lütfen aşağıdaki geri dönüş formunu kullanın.',
                                dictFileTooBig : 'Dosya çok büyük ({{filesize}}MiB). Maksimum Dosya Boyutu: {{maxFilesize}}MiB.',
                                dictInvalidFileType : 'Bu türdeki dosyaları yükleyemezsiniz.',
                                dictResponseError : 'Sunucu yanıt verdi {{statusCode}} kodu.',
                                dictCancelUpload : 'Yüklemeyi iptal et',
                                dictCancelUploadConfirmation : 'Bu yüklemeyi iptal etmek istediğinizden emin misiniz?',
                                dictRemoveFile : 'Dosyayı kaldır',
                                dictMaxFilesExceeded : 'Daha fazla dosya yükleyemezsiniz.',
                           }"
                       v-bind:preview-template="template"
                       v-on:vdropzone-success="onSuccess"
                       v-on:vdropzone-error="onUploadError"
                       v-on:vdropzone-removed-file="onFileDelete"
                       v-on:vdropzone-file-added="onFileAdded"
                       :useFontAwesome="true"
                       :ref="collection"
                       :maxNumberOfFiles="maxNumberOfFiles"
                       :maxFileSizeInMB="maxFileSizeInMb"
                       :acceptedFileTypes="acceptedFileTypes"
                       :thumbnailWidth="thumbnailWidth"
                       :headers="headers">

                <input type="hidden" name="collection" :value="collection">
            </dropzone>`
});