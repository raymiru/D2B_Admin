const axios = require('axios');
const rdp = require('node-rdp');

let iamToken;
let VMS;

// const token = 'CggaATEVAgAAABKABAXPGNV_FlAyflRFxBnxCiMnqGwpSf6PzMsI_U4zFJ-3d7ndFnL0iJ1-tyQOyQcb0fMhCVDYO_dIpFwSvrvVnv78cN6cKTGuD782IHReC-AIu97RQR-MtYowjMWb2RaBt4NDsBXLiE454gUdU1Tzq3Ow4qeKe-QEKYbpIK9KV-OJOb3tlcgnGE3Rk0PmNOseov5NdfuULUyRNusiQZbdErIWHGeldXNo1Ont8bJOuxeJfVYPSj7MQ_fGvmVU5eOW4WQjh6L0SQxOxVOODDftYVWLHvbWATSae6Dokr7T5L9zgDu40rWe22PqKSf8O14UkrVtTuZ3mxWYcQ9uw2VdGGYmCSNhTRR2mks5vFLEKncSzRG-RcoSoZQkgHFx-KKzzmM8NDy1R7Rz1RnyKD6rHPAkZIOxBYitv66EM42ZyhuF3qjEIs3ULGU4ao-gZYBygA6kgoMT_85HDLn840WFyY2jGNjjumyr5S9CzbJ6JNTu2Iy9QMmyuA-BUSlngcl09WQ5dhDZQEFZPheEM8mghEaU_KjpGRzx38KfrWXwRkvZi1wKG2Wt80zY3sXTibNzXLDq5gHx0tuEk-MWiCCTmJzdUckk-tY40khkk5OMk8c5KCvwG4fDMsDnPi80-BpHQ4jqKFYlbZcGKJx7ktHxf1j4qeJdkN9Mt-xtf72NLoMKGmUKIGUxMTg5Y2M1YWRhMzQ3N2Y5YmIzNzI3NzU2MDU5ODJlEJjwpOUFGNjBp-UFIiMKFGFqZXZja21sOGhudnY4ZHJuaHJlEgtkZXZpbGlzaHd0cloAMAI4AUoIGgExFQIAAABQASD0BA'



const getIamToken = () => {
    axios.post('https://iam.api.cloud.yandex.net/iam/v1/tokens?yandexPassportOauthToken=AQAAAAAW4y3CAATuwf0lySXOt0DtlLJRug6-crE', {
        params: {
            yandexPassportOauthToken: 'AQAAAAAW4y3CAATuwf0lySXOt0DtlLJRug6-crE'
        }
    })
        .then(response => {
            console.log(response.data);
            iamToken = response.data.iamToken;
            axios.defaults.headers.common = {'Authorization': `Bearer ${iamToken}`}
            getListRDP()

        })
        .catch(error => {
            console.log(error)
        })
}


const rdpConn = address => {
    rdp({
        address: address,
        username: 'administrator',
        password: 'RmirU4991d2@vm'
    }).then(function () {
        console.log('At this, point, the connection has terminated.');
    });
}



const getListRDP = () => {
    axios.get('https://compute.api.cloud.yandex.net/compute/v1/instances?folderId=b1gcnf2tp0rec9ftc58h')
        .then(response => {
            VMS = response.data.instances
            VMS.forEach(elem => {
                if (elem.networkInterfaces[0].primaryV4Address.oneToOneNat && elem.name !== 'd2b-admin') {
                    console.log(elem.name)
                    console.log(elem.networkInterfaces[0].primaryV4Address.oneToOneNat.address)
                    rdpConn(elem.networkInterfaces[0].primaryV4Address.oneToOneNat.address)
                }
            })
        }).catch(error => {
        console.log(error)
    })
}

getIamToken()


