import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import type { CurriculumVitae } from "../../../types/master/CurriculumVitae.type";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    lineHeight: 1.2,
  },

  header: {
    textAlign: "center",
    marginBottom: 16,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },

  subHeaderDegrees: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 8,
  },

  contactLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 8,
  },
  separator: {
    marginHorizontal: 4,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    marginTop: 12,
    marginBottom: 4,
  },

  entryBlock: {
    marginBottom: 10,
  },

  rowBold: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    fontWeight: "bold",
  },

  rowItalic: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    fontStyle: "italic",
    marginBottom: 2,
  },
  companyName: {
    width: "70%",
    textAlign: "left",
  },
  locationText: {
    width: "30%",
    textAlign: "right",
  },
  dateText: {
    fontStyle: "normal",
  },

  bulletRow: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 12,
  },
  bullet: {
    width: 10,
    fontSize: 9,
  },
  bulletContent: {
    flex: 1,
    fontSize: 9,
    color: "#4B5563",
    textAlign: "justify",
  },

  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
    fontSize: 9,
  },
  skillCategory: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 8.5,
  },

  languageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 9,
  },
  link: {
    color: "#000000",
    textDecoration: "none",
  },
});

interface CVDocumentProps {
  data: CurriculumVitae;
  t: any;
}

export const CVDocument = ({ data, t }: CVDocumentProps) => {
  const {
    personalInformation,
    education,
    workExperience,
    skillGroups,
    languages,
  } = data;

  return (
    <Document
      title={`CV_${personalInformation.fullName?.replace(/\s+/g, "_")}_2026`}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInformation.fullName || "Your Full Name"}
          </Text>
          <Text style={styles.subHeaderDegrees}>
            {education.map((edu, i) => (
              <Text key={i}>
                {edu.degree}
                {i < education.length - 1 ? " | " : ""}
              </Text>
            ))}
          </Text>

          <View style={styles.contactLine}>
            {personalInformation.location && (
              <Text>{personalInformation.location}</Text>
            )}

            {personalInformation.telephone && (
              <>
                <Text style={styles.separator}>|</Text>
                <Text>{personalInformation.telephone}</Text>
              </>
            )}

            {personalInformation.email && (
              <>
                <Text style={styles.separator}>|</Text>
                <Text>{personalInformation.email}</Text>
              </>
            )}

            {personalInformation.linkedinUrl && (
              <>
                <Text style={styles.separator}>|</Text>
                <Link style={styles.link} src={personalInformation.linkedinUrl}>
                  <Text>
                    {personalInformation.linkedinUrl.replace(
                      /^https?:\/\/(www\.)?/,
                      "",
                    )}
                  </Text>
                </Link>
              </>
            )}

            {personalInformation.portfolioUrl && (
              <>
                <Text style={styles.separator}>|</Text>
                <Link
                  style={styles.link}
                  src={personalInformation.portfolioUrl}
                >
                  <Text>
                    {personalInformation.portfolioUrl.replace(
                      /^https?:\/\/(www\.)?/,
                      "",
                    )}
                  </Text>
                </Link>
              </>
            )}
          </View>
        </View>

        {workExperience.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{t.workExperience}</Text>
            {workExperience.map((work) => (
              <View key={work.id} style={styles.entryBlock}>
                <View style={styles.rowBold}>
                  <Text style={styles.companyName}>{work.company}</Text>
                  <Text style={styles.locationText}>{work.location}</Text>
                </View>
                <View style={styles.rowItalic}>
                  <Text>{work.position}</Text>
                  <Text style={styles.dateText}>
                    {work.startDate} — {work.endDate}
                  </Text>
                </View>
                {work.description.split("\n").map((line, i) => {
                  const cleanLine = line.replace("•", "").trim();
                  if (!cleanLine) return null;
                  return (
                    <View key={i} style={styles.bulletRow}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.bulletContent}>{cleanLine}</Text>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        )}

        {education.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{t.education}</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.entryBlock}>
                <View style={styles.rowBold}>
                  <Text style={styles.companyName}>{edu.institution}</Text>
                  <Text style={styles.locationText}>{edu.location}</Text>
                </View>
                <View style={styles.rowItalic}>
                  <Text>{edu.fieldOfStudy}</Text>
                  <Text style={styles.dateText}>
                    {edu.startDate} — {edu.endDate}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {skillGroups.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{t.skills}</Text>
            {skillGroups.map((group) => (
              <View key={group.id} style={styles.skillRow}>
                <Text style={styles.skillCategory}>{group.category}: </Text>
                <Text style={{ flex: 1 }}>{group.skills.join(", ")}</Text>
              </View>
            ))}
          </View>
        )}

        {languages.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{t.languages}</Text>
            <View style={styles.languageContainer}>
              {languages.map((lang, index) => (
                <Text key={lang.id}>
                  <Text style={{ fontWeight: "bold" }}>{lang.language}: </Text>
                  <Text style={{ fontStyle: "italic" }}>
                    {lang.proficiency}
                  </Text>
                  {index < languages.length - 1 ? <Text> ; </Text> : ""}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};
