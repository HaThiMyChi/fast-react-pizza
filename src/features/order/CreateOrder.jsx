import React from 'react';
import PropTypes from 'prop-types';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';

import { createOrder } from '../../services/apiRestaurant';

CreateOrder.propTypes = {
    
};

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];


function CreateOrder(props) {
    const cart = fakeCart;

    const navigation = useNavigation();
    console.log('navvvv', navigation)

    const isSubmitting = navigation.state === "submitting";
    const formErrors = useActionData();

    return (
        <div className='px-4 py-6'>
            <h2 className='mb-8 text-xl font-semibold'>Ready to order? Let's go!</h2>
            {/* Form method="post" action="/order/new" */}
            <Form method='POST'>
                <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
                    <label className='sm:basis-40'>First Name</label>
                    <div className='grow'>

                        <input type="text" name="customer" required  className='input w-full' />
                    </div>
                        
                </div>

                <div className='relative mb-5 flex flex-col gap-2
                 sm:flex-row sm:items-center'>
                    <label className='sm:basis-40'>Phone number</label>
                    <div className="grow">
                        <input type="tel" name="phone" required 
                             className='input w-full'/>
                        {formErrors?.phone && (
                            <p className='text-xs mt-2 text-red-700 bg-red-100 rounded-md p-2'>
                                {formErrors.phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className='relative mb-5 flex flex-col gap-2
                 sm:flex-row sm:items-center' >
                    <label className='sm:basis-40'>Address</label>
                    <div className='grow'>
                        <input type="text" name="address" required
                            className='input w-full' />
                    </div>
                </div>

                <div className='mb-12 flex items-center gap-5'>
                    <input type="checkbox" name="priority" id="priority" 
                        className='h-6 w-6 accent-yellow-400
                            focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2'/>
                    <label htmlFor="priority" className='font-medium'>Want to yo give your order priority?</label>
                </div>

                <div>
                    <input type="hidden" name="cart" value={JSON.stringify(cart)} />
                    <button disabled={isSubmitting}
                        className='px-4 py-3 inline-block rounded-full tracking-wide text-stone-800
                            bg-yellow-400 uppercase font-semibold
                            hover:bg-yellow-300 transition-colors duration-300
                            focus:bg-yellow-300 focus:outline-none focus:ring
                            focus:ring-yellow-300 focus:ring-offset-2
                            disabled:cursor-not-allowed'>{isSubmitting
                        ? 'Placing order....'
                        : `Order now from`}
                    </button>
                </div>
            </Form>
        </div>
    );
}

export async function action({request}) 
{
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    console.log('data action ', data)

    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === 'true'
    }
    console.log('order',order)

    const errors = {};

    if (!isValidPhone(order.phone))
        errors.phone = 'Please give us your correct phone number. We might need it to contact you.';

        if(Object.keys(errors).length > 0) return errors;


    // If everything is okay, create new order and redirect
    const newOrder = await createOrder(order);
    
    return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;