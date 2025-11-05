flowchart TD
    Visitor-->Home[Home Page]
    Home-->About[About Section]
    Home-->Services[Services Section]
    Home-->Gallery[Gallery Section]
    Home-->Contact[Contact Section]
    Contact-->WhatsApp[Open WhatsApp Chat]
    Visitor-->Admin[Admin Login]
    Admin-->LoginForm[Login Form]
    LoginForm-->Auth{Credentials Valid}
    Auth--Yes-->Dashboard[CMS Dashboard]
    Auth--No-->LoginForm
    Dashboard-->ManageAbout[Edit About]
    Dashboard-->ManageServices[Edit Services]
    Dashboard-->ManageGallery[Edit Gallery]
    Dashboard-->ManageContact[Edit Contact Form]
    ManageAbout-->SaveAbout[Save Changes]
    ManageServices-->SaveServices[Save Changes]
    ManageGallery-->SaveGallery[Save Changes]
    ManageContact-->SaveContact[Save Changes]
    SaveAbout-->Dashboard
    SaveServices-->Dashboard
    SaveGallery-->Dashboard
    SaveContact-->Dashboard