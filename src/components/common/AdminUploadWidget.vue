<template>
  <section class="admin-upload-widget">
    <button
      type="button"
      class="preview-form-image upload-button d-flex flex-column main-shadow"
      :class="{ error: showError }"
      @click="openImageWidget()"
      v-if="files.length < maxFiles"
    >
      <i class="ri-image-line"></i>
      Seleccionar imagen
    </button>

    <div
      class="preview-form-image p-1 position-relative main-shadow"
      :class="{ error: showError }"
      v-for="(item, i) in files"
      :key="item.id"
    >
      <img :src="item.url" alt="" />
      <button
        type="button"
        class="remove-item d-flex align-items-center"
        @click="removeItem(item, i)"
      >
        <i class="ri-close-circle-line"></i>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdminUploadWidget",
  data() {
    return {
      cloudinaryConfig: {
        // cloudName: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME,
        // uploadPreset: process.env.VUE_APP_CLOUDINARY_UPLOAD_PRESET,
        // language: process.env.VUE_APP_CLOUDINARY_LANG,
        // folder: this.folder,
        cropping: false,
        multiple: this.multipleFiles,
        text: {
          es: {
            queue: {
              title: "Archivos a subir",
              title_uploading_with_counter: "Uploading {{num}} files",
            },
            crop: {
              title: "Recortar imagen",
            },
            local: {
              browse: "Explorar",
              dd_title_multi: "Arrastre o suelte archivos aquí",
              dd_title_single: "Arrastre o suelte archivos aquí",
            },
            menu: {
              files: "Mis archivos",
              web: "Desde la web",
              camera: "Cámara",
              gsearch: "Buscar imagen",
              gdrive: "Google Drive",
              dropbox: "Dropbox",
              facebook: "Facebook",
              instagram: "Instagram",
              shutterstock: "Shutterstock",
              getty: "gettyimages",
              istock: "iStock",
              unsplash: "Unsplash",
            },
          },
        },
      },
      files: [],
    };
  },
  props: {
    multipleFiles: {
      type: Boolean,
      default: false,
    },
    maxFiles: Number,
    showError: Boolean,
    oldFiles: Array,
    config: Object
  },
  watch: {
    oldFiles: function () {
      if (!this.files.length) {
        this.setOldList();
      }
    },
  },
  methods: {
    openImageWidget() {

      let cloudinaryConfig = {
        ...this.config,
        ...this.cloudinaryConfig
      }

      if (window.cloudinary) {
        let uploadWidget = window.cloudinary.createUploadWidget(
          cloudinaryConfig,
          (error, result) => {
            if (!error && result && result.event === "success") {
              // console.log("Done! Here is the image info: ", result.info);

              let image = {
                id: result.info.public_id,
                url: result.info.secure_url,
                thumbnail_url: result.info.thumbnail_url,
                path: result.info.path,
                description: null,
              };

              let file = JSON.parse(JSON.stringify(image));

              if (this.multipleFiles) {
                this.files.push(file);
              } else {
                this.files[0] = file;
              }

              this.files = this.files.splice(0, this.maxFiles);

              this.$emit("success", this.files);
            }
          }
        );

        uploadWidget.open();
      }
    },
    removeItem(item, i) {
      this.files.splice(i, 1);
      this.$emit('deleted', item.id)
    },
    setOldList() {
      let list = JSON.parse(JSON.stringify(this.oldFiles));
      this.files.push(...list);
    },
  }
};
</script>

<style lang="scss" scoped>
.admin-upload-widget {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;

  @media (min-width: $md) {
    grid-template-columns: repeat(4, 1fr);
  }

  .preview-form-image {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed rgba($admin-gray, 0.3);
    border-radius: 8px;
    transition: border-color 0.1s;
    cursor: pointer;

    &.error {
      border: 1px dashed $admin-red;
    }

    &:hover {
      border: 1px dashed $admin-blue;

      .upload-button {
        color: rgba($admin-blue, 0.9);
      }
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .upload-button {
    color: rgba($admin-gray, 0.9);

    &:hover {
      color: rgba($admin-blue, 0.9);
    }
  }

  i {
    font-size: 24px;
  }

  .remove-item {
    width: 25px;
    height: 25px;
    display: inline-block;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
  }
}
</style>