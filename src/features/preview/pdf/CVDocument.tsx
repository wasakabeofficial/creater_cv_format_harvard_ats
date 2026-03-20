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
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 45,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    lineHeight: 1.15,
  },

  header: {
    alignItems: "center",
    marginBottom: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },

  subHeaderDegrees: {
    fontSize: 9,
    textTransform: "uppercase",
    color: "#1F2937",
    marginBottom: 6,
    textAlign: "center",
  },

  contactLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: 8.5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    paddingBottom: 6,
    width: "100%",
  },

  separator: {
    marginHorizontal: 6,
    color: "#9CA3AF",
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottomWidth: 0.8,
    borderBottomColor: "#000000",
    marginTop: 14,
    marginBottom: 6,
    paddingBottom: 1,
  },

  entryBlock: {
    marginBottom: 8,
  },

  rowBold: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    fontSize: 9.5,
    fontWeight: "bold",
    marginBottom: 1,
  },

  rowItalic: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    fontStyle: "italic",
    marginBottom: 3,
    color: "#374151",
  },

  companyName: {
    width: "50%",
    paddingRight: 10,
    textAlign: "left",
  },
  locationText: {
    width: "50%",
    textAlign: "right",
    fontWeight: "normal",
    fontSize: 9,
  },

  dateText: {
    fontStyle: "normal",
    textAlign: "right",
  },

  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 4,
  },

  bullet: {
    width: 12,
    fontSize: 9,
    textAlign: "center",
  },

  bulletContent: {
    flex: 1,
    fontSize: 9,
    color: "#374151",
    textAlign: "justify",
    paddingRight: 5,
  },

  skillRow: {
    flexDirection: "row",
    marginBottom: 3,
    fontSize: 9,
    lineHeight: 1.3,
  },

  skillCategory: {
    fontWeight: "bold",
    width: 180,
  },

  languageContainer: {
    flexDirection: "row",
    fontSize: 9,
    marginTop: 2,
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

  const cleanUrl = (url: string) =>
    url?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <Document
      title={`CV_${personalInformation.fullName?.replace(/\s+/g, "_")}_2026`}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInformation.fullName}</Text>

          <Text style={styles.subHeaderDegrees}>
            {education.map(
              (edu, i) =>
                `${edu.degree}${i < education.length - 1 ? " | " : ""}`,
            )}
          </Text>

          <View style={styles.contactLine}>
            <Text>{personalInformation.location}</Text>

            {personalInformation.telephone && (
              <>
                <Text style={styles.separator}>•</Text>
                <Text>{personalInformation.telephone}</Text>
              </>
            )}

            {personalInformation.email && (
              <>
                <Text style={styles.separator}>•</Text>
                <Text>{personalInformation.email}</Text>
              </>
            )}

            {personalInformation.linkedinUrl && (
              <>
                <Text style={styles.separator}>•</Text>
                <Link style={styles.link} src={personalInformation.linkedinUrl}>
                  {cleanUrl(personalInformation.linkedinUrl)}
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
                  const cleanLine = line.replace(/^[•\-\*]/, "").trim();
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
                <Text style={styles.skillCategory}>{group.category}:</Text>
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
                  <Text>{lang.proficiency}</Text>
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
