import React from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { typography, themeStyles } from '@/lib/styles'

const AboutPage = () => {
  return (
    <section>
        <SectionHeader title='About Us' />
        <div className={`${themeStyles.section} p-10 lg:p-20`}>

        <div className='flex flex-col gap-4 mb-10'>
        <h1 className={typography.subtitle}>
          ______ Our Mission
        </h1>
        <p className={typography.paragraph}>
          To provide an excellent and the most effective and efficient services
          and products based on membership using models, program, solutions and
          the platform. To accelerate business performance, motivates investment
          and encourage high level circular flow of money through an income
          program. To empower individuals to become self-reliant through
          hard-work and leveraging on the available resources in order to enable
          them to satisfy and exceed their basic necessities (food security,
          shelter and finances) and to increase productivity.
        </p>
        <p className={typography.paragraph}>
          To position the company so that it will solve all problems related to
          business and provide products and services that will accelerate
          business turn-over through marketing solution.
        </p>
        <p className={typography.paragraph}>
          To support government economic policies through developing human
          resources (JS- Resource Model), training entrepreneurs to leverage on
          those managerial skills and technical skills in order to manage other
          resources for national and global growth.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <h1 className={typography.subtitle}>
          ______ Our Vision
        </h1>
        <p className={typography.paragraph}>
          To become a global phenomenon in business solution, entrepreneurial
          solution, empowerment solution, education model, and marketing model
          (BEEEM) that will stand for a long valued, solid, and strong
          consistent inspired innovations. That will help individuals and
          organizations achieve their dreams and goals very easy, fast and
          really simple
        </p>
        <p className={typography.paragraph}>
          To use our initiated programs/ models/ solutions to raise the level of
          knowledge, awareness, to increase income level and show citizens how
          wealth is created through self-development, how companies improve
          through staff development and pool marketing, which is the major
          challenge facing our human capital development in Nigeria today.
        </p>
        <p className={typography.paragraph}>
          To make sure Members and teams will be sure of full control of
          themselves, time, income, resources for self-mastery and help them
          become more discipline, self-reliance, patriotic, and productive to
          contribute in job creation, financial inclusion, business success,
          education solution, and be empowered to become entrepreneur, and
          leaders who can build their nation.
        </p>
      </div>

        </div>
    </section>
  )
}

export default AboutPage