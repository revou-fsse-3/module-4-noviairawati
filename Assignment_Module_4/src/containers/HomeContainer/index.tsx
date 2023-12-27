import { Input, Text, Button, Card } from '../../components';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const HomeContainer = () => {
    
    const [step, setStep] = useState<number>(1);
  
    
    const handleNext = () => {
      if (step === 3) {
        return;
      }
      setStep((prevState) => prevState + 1);
    };
  
    
    const handlePrevious = () => {
      if (step === 1) {
        return;
      }
      setStep((prevState) => prevState - 1);
    };
  
    interface FormProps {
      fullname: string;
      email: string;
      date: string;
      alamat: string;
      kota: string;
      negara: string;
      kodepos: string;
      username: string;
      password: string;
    }
  
    const formMik = useFormik({
      initialValues: {
        fullname: '',
        email: '',
        date: '',
        alamat: '',
        kota: '',
        negara: '',
        kodepos: '',
        username: '',
        password: '',
      },
      onSubmit: (values: FormProps) => console.log(values),
      validationSchema: yup.object({
        fullname: yup.string().required('Nama tidak boleh kosong'),
        email: yup.string().email('Email tidak valid').required('Email tidak boleh kosong'),
        date: yup.string().required('Tanggal lahir tidak boleh kosong'),
        alamat: yup.string().required('Alamat tidak boleh kosong'),
        kota: yup.string().required('Kota tidak boleh kosong'),
        negara: yup.string().required('Negara tidak boleh kosong'),
        kodepos: yup.string().required('Kodepos tidak boleh kosong'),
        username: yup.string().required('Username tidak boleh kosong'),
        password: yup.string().min(8, 'Password minimal 8 karakter').required('Password tidak boleh kosong'),
      }),
    });
    console.log(formMik);
    return (
      <Card border={false} className=" ">
        
  
        <Card border>
          
  
          {step === 1 && (
            <form onSubmit={formMik.handleSubmit}>
              <p>Personal Information</p>
             
              <div className="m-1">
                <Text>{'FullName'}</Text>
                <Input
                  className="block border-emerald-700 border"
                  name={'nama'}
                  value={formMik.values.fullname}
                  onChange={formMik.handleChange('fullname')}
                />
                
                {formMik.errors.fullname && (
                  <Text>{formMik.errors.fullname}</Text>
                )}
              </div>
            
              <div className="m-1">
                <Text>{'Email Address'}</Text>
                <Input
                  className="block border-emerald-700 border"
                  name={'email'}
                  value={formMik.values.email}
                  onChange={formMik.handleChange('email')}
                />
                
                {formMik.errors.email && <Text>{formMik.errors.email}</Text>}
              </div>
              
              <div className="m-1">
                <Text>{'Date of birth'}</Text>
                <Input
                  className="block border-emerald-700 border"
                  name={'date'}
                  value={formMik.values.date}
                  onChange={formMik.handleChange('date')}
                />
                
                {formMik.errors.date && <Text>{formMik.errors.date}</Text>}
              </div>
             
              <Button
                label={'Previous'}
                onClick={handlePrevious}
                type={'button'}
                className={'bg-green-500'}
              />
              
              <Button
                label={'Next'}
                onClick={handleNext}
                type={'button'}
                className={'bg-green-500'}
              />
            </form>
          )}
  
          
  
          {step === 2 && (
            <form onSubmit={formMik.handleSubmit}>
              <p>Address Information</p>
              
              <div className="m-1">
                <Text>{'Street Address'}</Text>
                <Input
                  className="block border-emerald-700 border"
                  name={'alamat'}
                  value={formMik.values.alamat}
                  onChange={formMik.handleChange('alamat')}
                />
                
                {formMik.errors.alamat && <Text>{formMik.errors.alamat}</Text>}
              </div>
             
              <div className="m-1">
                <Text>{'City'}</Text>
                <Input
                  className="block border-emerald-700 border"
                  name={'kota'}
                  value={formMik.values.kota}
                  onChange={formMik.handleChange('kota')}
                />
                
                {formMik.errors.kota && <Text>{formMik.errors.kota}</Text>}
              </div>
              
              <div className="m-1">
                <Text>{'State'}</Text>
                <Input
                  className="block border-emerald-700 border"
                  name={'negara'}
                  value={formMik.values.negara}
                  onChange={formMik.handleChange('negara')}
                />
                
                {formMik.errors.negara && <Text>{formMik.errors.negara}</Text>}
              </div>
              
              <div className="m-1">
                <Text>{'Zip Code'}</Text>
                <Input
                  className="block border-emerald-700 border"
                  name={'kodepos'}
                  value={formMik.values.kodepos}
                  onChange={formMik.handleChange('kodepos')}
                />
                
                {formMik.errors.kodepos && <Text>{formMik.errors.kodepos}</Text>}
              </div>
              
              <Button
                label={'Previous'}
                onClick={handlePrevious}
                type={'button'}
                className={'bg-green-500'}
              />
              
              <Button
                label={'Next'}
                onClick={handleNext}
                type={'button'}
                className={'bg-green-500'}
              />
            </form>
          )}
  
          
  
          {step === 3 && (
            <form onSubmit={formMik.handleSubmit}>
              
              <div className="m-1">
                <Text>{'Username'}</Text>
                <Input
                  className="block border-emerald-700 border"
                  name={'username'}
                  value={formMik.values.username}
                  onChange={formMik.handleChange('username')}
                />
                
                {formMik.errors.username && (
                  <Text>{formMik.errors.username}</Text>
                )}
              </div>
              
              <div className="m-1">
                <Text>{'Password'}</Text>
                <Input
                  className="block border-emerald-700 border"
                  name={'password'}
                  value={formMik.values.password}
                  onChange={formMik.handleChange('password')}
                />
                
                {formMik.errors.password && (
                  <Text>{formMik.errors.password}</Text>
                )}
              </div>
              
              <Button
                label={'Previous'}
                onClick={handlePrevious}
                type={'button'}
                className={'bg-green-500'}
              />
              
              <Button
                label={'Submit'}
                type={'submit'}
                className={'bg-green-500'}
              />
            </form>
          )}
        </Card>
      </Card>
    );
  }
export default HomeContainer