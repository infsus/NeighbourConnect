interface Pages {
    [key: string]: {
        component: React.FC,
        name: string,
        url: string,
        navbar: boolean
    }
};
