export type menuType =  'About'     |
                        'Gallery'   |
                        'GuestRoom' |
                        'Contacts';

export const menuType = {
    About:     'About'     as menuType,
    Gallery:   'Gallery'   as menuType,
    GuestRoom: 'GuestRoom' as menuType,
    Contacts:  'Contacts'  as menuType
};

export class MenuItem {
    public name: menuType;
    public link: string;
    public text: string;
}
