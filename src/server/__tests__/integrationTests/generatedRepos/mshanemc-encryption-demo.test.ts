
import { deployCheck } from './../../helpers/deployCheck';
import { sfdxTimeout } from './../../helpers/testingUtils';

test('non-pool grab of the org mshanemc/encryption-demo/no branch', async () => {
    await deployCheck({
        username: 'mshanemc',
        repo: 'encryption-demo' });
}, sfdxTimeout);     
