import React from 'react';
import Header from '../components/layout/Header';

function Faq() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex flex-col items-center justify-start pt-10 px-5 flex-grow bg-lightShade">
                <h1 className="text-3xl font-bold mb-8 header">Frequently Asked Questions</h1>
                <div className="w-full max-w-xl">
                    <h2 className="text-xl font-bold mb-2 body">What is Reloud?</h2>
                    <p className="text-lg mb-8 body">Reloud is a high-quality music streaming service that allows you to listen to your favorite tunes, discover new artists, and enjoy exclusive releases. With personalized playlists and offline mode, you can enjoy music anywhere, anytime.</p>
                    <h2 className="text-xl font-bold mb-2 body">How do I create an account on Reloud?</h2>
                    <p className="text-lg mb-8 body">Creating an account is easy! Click on the "Sign Up" button on our homepage, enter your email address, create a password, and follow the prompts to complete the registration. You can also sign up using your social media accounts.</p>
                    <h2 className="text-xl font-bold mb-2 body">Is Reloud free?</h2>
                    <p className="text-lg mb-8 body">Yes, Reloud offers a free plan that includes basic features with ads. For an ad-free experience and additional features, you can upgrade to our Premium or Family plans.</p>
                    <h2 className="text-xl font-bold mb-2 body">What features are included in the Premium plan?</h2>
                    <p className="text-lg mb-8 body">The Premium plan offers an ad-free experience, high-quality streaming, offline mode for downloading tracks, and access to exclusive releases. It also includes personalized playlists tailored to your music taste.</p>
                    <h2 className="text-xl font-bold mb-2 body">How do I download music for offline listening?</h2>
                    <p className="text-lg mb-8 body">To download music, you need to have a Premium subscription. Simply find the song or playlist you want to download, and click on the download button. The tracks will be saved to your device for offline listening.</p>
                    <h2 className="text-xl font-bold mb-2 body">Can I share my account with others?</h2>
                    <p className="text-lg mb-8 body">Our Family plan allows you to share your account with up to 5 family members. Each member gets their own individual account under the Family plan, ensuring a personalized music experience for everyone.</p>
                    <h2 className="text-xl font-bold mb-2 body">What devices are compatible with Reloud?</h2>
                    <p className="text-lg mb-8 body">Reloud is compatible with a wide range of devices, including smartphones (iOS and Android), tablets, desktop computers, and smart speakers. You can also use Reloud on web browsers.</p>
                    <h2 className="text-xl font-bold mb-2 body">How do I cancel my subscription?</h2>
                    <p className="text-lg mb-8 body">You can cancel your subscription at any time by going to your account settings and selecting "Cancel Subscription." Your account will revert to the free plan at the end of your current billing cycle.</p>
                    <h2 className="text-xl font-bold mb-2 body">Is my data safe with Reloud?</h2>
                    <p className="text-lg mb-8 body">Yes, we take your privacy and security seriously. We use industry-standard encryption and security measures to protect your data. For more details, please refer to our Privacy Policy.</p>
                    <h2 className="text-xl font-bold mb-2 body">How can I contact Reloud support?</h2>
                    <p className="text-lg mb-8 body">If you need assistance, you can contact our support team through the "Contact Us" form on our website. We're here to help you with any questions or issues you may have.</p>
                </div>
            </main>
        </div>
    );
}

export default Faq;