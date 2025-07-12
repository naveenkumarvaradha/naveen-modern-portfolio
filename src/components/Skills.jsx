import React from 'react'
import { FaServer, FaNetworkWired, FaDatabase, FaLinux, FaTools, FaBug, FaProjectDiagram } from 'react-icons/fa'
import { SiWindows, SiMysql, SiRedhat, SiJirasoftware, SiMicrosoftsqlserver } from 'react-icons/si'

const Skills = () => (
  <section id="skills" data-aos="fade-up">
    <h2>Technical Skills</h2>
    <div className="skills-grid">
      <div><FaProjectDiagram /> ERP Platforms: <strong>Datatex ERP, WFX ERP</strong></div>
      <div><FaServer /> Infrastructure: <strong>VMware ESXi, Fortinet, Sophos, DNS, DHCP, VPN</strong></div>
      <div><SiWindows /> Servers: <strong>Windows Server</strong></div>
      <div><FaLinux /> OS: <strong>RHEL (Red Hat Enterprise Linux)</strong></div>
      <div><FaNetworkWired /> Middleware & Services: <strong>Active Directory, JBoss</strong></div>
      <div><SiMicrosoftsqlserver /> Database: <strong>SQL Server, SSRS</strong></div>
      <div><SiMysql /> Database: <strong>MySQL</strong></div>
      <div><FaTools /> Tools: <strong>Jira, TeamViewer, AnyDesk, Excel</strong></div>
      <div><FaBug /> QA & Support: <strong>Patch Deployment, Testing, SLA Handling, UAT</strong></div>
    </div>
  </section>
)

export default Skills
